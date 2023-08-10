import { useDappletsFacet } from '../DappletsFacet'
import { useDappsFacet } from '../DappsFacet'
import { useDiamondCutFacet } from '../DiamondCutFacet'
import { useDiamondLoupeFacet } from '../DiamondLoupeFacet'
import { useERC165Facet } from '../ERC165Facet'
import { useOperatorFacet } from '../OperatorFacet'
import { useOwnershipFacet } from '../OwnershipFacet'

export const useSystem = {
  ...useDappletsFacet,
  ...useDappsFacet,
  ...useDiamondCutFacet,
  ...useDiamondLoupeFacet,
  ...useERC165Facet,
  ...useOperatorFacet,
  ...useOwnershipFacet,
}