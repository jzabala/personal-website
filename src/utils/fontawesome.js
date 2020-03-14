import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faGithub, faTwitter, faLinkedin, faJsSquare, faNode, faReact)
