import React, { useEffect, useRef } from 'react'
import { CountUp } from 'use-count-up'
import { Text } from 'uikit'

interface TextProps {
  isDisabled?: boolean
  fontSize?: string
  color?: string
  bold?: boolean
}

interface BalanceProps extends TextProps {
  value?: number
  decimals?: number
  unit?: string
}

const Balance: React.FC<BalanceProps> = ({ value, fontSize, color, decimals, isDisabled, unit, bold }) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <Text bold={bold} color={isDisabled ? 'textDisabled' : color} fontSize={fontSize}>
      <CountUp start={previousValue.current} end={value} decimalPlaces={decimals} duration={1} thousandsSeparator="," />
      {value && unit && <span>{unit}</span>}
    </Text>
  )
}

Balance.defaultProps = {
  fontSize: '32px',
  isDisabled: false,
  color: 'text',
  decimals: 3,
}

export default Balance
