import React from 'react'
import styled from 'styled-components'
import VisuallyHidden from '../VisuallyHidden'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const SelectWrapper = styled('select')(({ displayedValue }) => ({
  background: COLORS.transparentGray15,
  border: `1px solid transparent`,
  borderRadius: 8,
  color: COLORS.gray700,
  height: 43,
  padding: `12px 16px 10px 16px`,
  width: `${(displayedValue.length + 24) / 1.5}ch`,
  appearance: 'none',
  '&:focus': {
    outline: '1px dotted #212121',
    outline: '5px auto -webkit-focus-ring-color',
  },
  '&:hover': {
    color: COLORS.black,
  },
}))

const Wrapper = styled.label`
  position: relative;
`

const StyledIcon = styled(Icon)`
  ${Wrapper} & {
    position: absolute;
    right: 16px;
    top: -2px;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <>
      <Wrapper>
        <StyledIcon id="chevron-down" size={24} />
        <SelectWrapper
          value={value}
          onChange={onChange}
          displayedValue={displayedValue}
        >
          {children}
        </SelectWrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
      </Wrapper>
    </>
  )
}

export default Select
