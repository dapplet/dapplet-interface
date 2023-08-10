import { useDiamondLoupeFacet } from '../DiamondLoupeFacet'
import { useERC165Facet } from '../ERC165Facet'
import { useInstaller } from '../Installer'
import { useOwnershipFacet } from '../OwnershipFacet'

export const useClient = {
  ...useDiamondLoupeFacet,
  ...useERC165Facet,
  ...useInstaller,
  ...useOwnershipFacet,
}