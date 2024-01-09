import { Team } from './matches'

export type Player = {
  nickname: string
  name: string
  image: string
}

export interface MatchDetail {
  teamOne: Team
  teamTwo: Team
  time: Date | string
  league: string
  teamOnePlayers: Player[]
  teamTwoPlayers: Player[]
}
