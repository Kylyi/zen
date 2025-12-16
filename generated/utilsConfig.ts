import { customDefu } from '~~/layers/Utilities/shared/functions/custom-defu'
import config0 from '../layers/Utilities/config'

export const utilsConfig = customDefu(config0)

export type IIUtilitiesConfig = typeof utilsConfig
export default utilsConfig
