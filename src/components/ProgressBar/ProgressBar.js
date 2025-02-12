import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--padding': '0px',
    '--height': '8px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--padding': '0px',
    '--height': '12px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--padding': '4px',
    '--height': '16px',
  },
}

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 50%;
`

const Bar = styled.div({
  borderRadius: 4,
  overflow: 'hidden',
})

const InnerBar = styled.div(({ value }) => ({
  width: `${value}%`,
  background: COLORS.primary,
  height: `var(--height)`,
  borderRadius: '4px 0 0 4px',
}))

const ProgressBar = ({ size, value }) => {
  const styles = SIZES[size]
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
      style={styles}
    >
      <Bar>
        <InnerBar style={styles} value={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </InnerBar>
      </Bar>
    </Wrapper>
  )
}

export default ProgressBar
