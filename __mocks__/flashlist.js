jest.mock('@shopify/flash-list', () => {
  const React = require('react')
  const ActualFlashList = jest.requireActual('@shopify/flash-list').FlashList
  return {
    ...jest.requireActual('@shopify/flash-list'),
    FlashList: (props) => (
      <ActualFlashList
        {...props}
        estimatedListSize={{ height: 1000, width: 400 }}
        horizontal={false}
      />
    ),
  }
})
