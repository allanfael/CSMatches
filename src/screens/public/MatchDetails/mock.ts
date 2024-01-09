import { MatchDetail } from 'interfaces/match-detail'

export const matchDetailsMock: MatchDetail = {
  teamOne: {
    name: 'Nixuh',
    image:
      'https://cdn.pandascore.co/images/team/image/131795/nixuhlogo_square.png',
  },
  teamTwo: {
    name: 'Goliath',
    image:
      'https://cdn.pandascore.co/images/team/image/126559/goliath_gaming.png',
  },
  time: '2024-01-09T14:00:00Z',
  league: 'PGL Major',
  teamOnePlayers: [
    {
      name: 'Alexey',
      image:
        'https://cdn.pandascore.co/images/player/image/22702/900px_nickel_back_at_dh_dehli_2019.png',
      nickname: 'NickelBack',
    },
    {
      name: 'Vladislav',
      image:
        'https://cdn.pandascore.co/images/player/image/23232/600px_krad_at_champions_cup_finals.png',
      nickname: 'Krad',
    },
  ],
  teamTwoPlayers: [
    {
      name: 'Aleksandr',
      image: 'https://cdn.pandascore.co/images/player/image/24697/p24809.png',
      nickname: 'TRAVIS',
    },
    {
      name: 'Igor',
      image:
        'https://cdn.pandascore.co/images/player/image/30826/600px_forester_at_champions_cup_finals.png',
      nickname: 'Forester',
    },
  ],
}
