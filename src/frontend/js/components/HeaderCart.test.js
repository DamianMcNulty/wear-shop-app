import React from 'react'
import { shallow } from 'enzyme'

import HeaderCart from './HeaderCart'

describe('<HeaderCart />', () => {
  test('should hide cart-badge if items count is zero', () => {
    const wrapper = shallow(<HeaderCart itemsCount={0} />)
    const cartBadge_styleProp = wrapper.find('.cart-badge').prop('style')
    expect(cartBadge_styleProp.display).toBe('none')
  })

  test('should show cart-badge if items count is not zero', () => {
    const wrapper = shallow(<HeaderCart itemsCount={1} />)
    const cartBadge_styleProp = wrapper.find('.cart-badge').prop('style')
    expect(cartBadge_styleProp.display).not.toBe('none')
  })
})
