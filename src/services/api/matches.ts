import { Match } from 'interfaces/matches'

import { get } from '.'

export const api = {
  matches: async (page: number): Promise<Match[]> => {
    const response: any = await get({
      url: `/matches/?page[size]=10&page[number]=${page}`,
    })

    const data: Match[] = response.map(
      (item: any) =>
        ({
          id: item.tournament.id.toString(),
          time: item.tournament.begin_at,
          live: item.games[0].status === 'running',
          teamOne: {
            image: item.opponents[0]?.opponent?.image_url,
            name: item.opponents[0]?.opponent.name,
          },
          teamTwo: {
            image: item.opponents[1]?.opponent?.image_url,
            name: item.opponents[1]?.opponent.name,
          },
          league: {
            image: item.league?.image_url,
            name: item.league?.name,
          },
        }) as Match,
    )

    return data
  },
}
