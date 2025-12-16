import { customDefu } from '#layers/utilities/shared/functions/custom-defu'
import config0 from '/Users/jk/Projects/zen/libs/Utilities/config'

export const utilsConfig = customDefu(config0)

export type IIUtilitiesConfig = typeof utilsConfig
export default utilsConfig
