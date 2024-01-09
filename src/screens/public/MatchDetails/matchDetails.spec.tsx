import { useMatchDetails, UseMatchDetailsProps } from '@hooks/useMatchDetails'
import { render, screen } from '@testing-library/react-native'

import { matchDetailsMock } from './mock'
import { MatchDetails } from '.'

jest.mock('../../../hooks/useMatchDetails', () => ({
  useMatchDetails: jest.fn(),
}))

describe('<MatchDetails />', () => {
  let sut: JSX.Element

  beforeAll(() => {
    sut = <MatchDetails />
  })

  it('should render screen correctly', async () => {
    ;(
      useMatchDetails as jest.MockedFunction<typeof useMatchDetails>
    ).mockReturnValue({
      match: matchDetailsMock,
    } as UseMatchDetailsProps)

    render(sut)

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render screen with values correctly', async () => {
    ;(
      useMatchDetails as jest.MockedFunction<typeof useMatchDetails>
    ).mockReturnValue({
      match: matchDetailsMock,
    } as UseMatchDetailsProps)

    const { getByText } = render(sut)

    const teamOneName = getByText('Nixuh')
    const teamTwoName = getByText('Goliath')

    expect(teamOneName).toBeTruthy()
    expect(teamTwoName).toBeTruthy()
  })
})
