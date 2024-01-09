export type Team = {
  name: string
  image: string
}

export interface Match {
  id: string
  teamOne: Team
  teamTwo: Team
  live: boolean
  time: Date | string
  league: Team
}
