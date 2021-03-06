/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
/* ------------------------------- Component -------------------------------- */
const FlexMagic = props => (
<Flex {...props.wrapper}  {...props.layout}  >
  {props.items.map(item =>(
    <Flex {...props.item.layout} {...item.styled} {...props.itemsStyled}  >
      {item.children}
    </Flex>
    ))}
</Flex>
)

FlexMagic.defaultProps = {
  wrapper: {
    direction: ['column', 'column', 'row'],
    justify: 'space-evenly',
    wrap: 'wrap'
  },
  item: {
    layout: {
      align: 'center',
      flex: ['1 1 100%', '1 1 100%',  '1 1 0'],
      justify: 'center',
      direction: 'column',
      position: 'relative',
    },
  }
}


export default FlexMagic