import { axiosConstructor } from './services/axios'
import { getUrl } from './config'

const url = getUrl('api')

export const [get, put, post, patch, del] = axiosConstructor(url)