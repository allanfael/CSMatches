import { useHome, UseHomeProps } from '@hooks/useHome'
import { fireEvent, render, screen } from '@testing-library/react-native'

import { matchesMock } from './mock'
import { Home } from '.'

jest.mock('../../../hooks/useHome', () => ({
  useHome: jest.fn(),
}))

describe('<Home />', () => {
  let sut: JSX.Element

  beforeAll(() => {
    sut = <Home />
  })

  it('should render Home correctly', async () => {
    ;(useHome as jest.MockedFunction<typeof useHome>).mockReturnValue({
      loading: false,
      loadingFetchMore: false,
      onFetchMore: jest.fn(),
      goToDetails: jest.fn(),
      matches: matchesMock,
    } as UseHomeProps)

    render(sut)

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should render loading component correctly', async () => {
    ;(useHome as jest.MockedFunction<typeof useHome>).mockReturnValue({
      loading: true,
      loadingFetchMore: false,
      onFetchMore: jest.fn(),
      goToDetails: jest.fn(),
      matches: matchesMock,
    } as UseHomeProps)

    const { getByTestId } = render(sut)

    expect(getByTestId('test-loading')).toBeDefined()
  })

  it('should render list correctly', async () => {
    ;(useHome as jest.MockedFunction<typeof useHome>).mockReturnValue({
      loading: false,
      loadingFetchMore: false,
      onFetchMore: jest.fn(),
      goToDetails: jest.fn(),
      matches: matchesMock,
    } as UseHomeProps)

    const { getByText } = render(sut)

    const teamOneName = getByText('teamOne')
    const teamTwoName = getByText('teamTwo')
    const leagueName = getByText('leagueTest')

    expect(teamOneName).toBeTruthy()
    expect(teamTwoName).toBeTruthy()
    expect(leagueName).toBeTruthy()
  })

  it('should render fetchMore component', async () => {
    ;(useHome as jest.MockedFunction<typeof useHome>).mockReturnValue({
      loading: false,
      loadingFetchMore: true,
      onFetchMore: jest.fn(),
      goToDetails: jest.fn(),
      matches: matchesMock,
    } as UseHomeProps)

    const { getByTestId } = render(sut)

    expect(getByTestId('test-loading-fetchMore')).toBeDefined()
  })

  it('should call goToDetails with item', async () => {
    const mockPressedFn = jest.fn()

    ;(useHome as jest.MockedFunction<typeof useHome>).mockReturnValue({
      loading: false,
      loadingFetchMore: false,
      onFetchMore: jest.fn(),
      goToDetails: mockPressedFn,
      matches: matchesMock,
    } as UseHomeProps)

    const { getByText } = render(sut)

    fireEvent.press(getByText('teamOne'))

    expect(mockPressedFn).toHaveBeenCalledWith(matchesMock[0])
  })
})
