// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// Fontawesome
import { config, library, dom } from '@fortawesome/fontawesome-svg-core'
// Change the config to fix the flicker
config.mutateApproach = 'sync'
// Import icons
import { faInfoCircle, faCheckCircle,
         faExclamationCircle, faExclamationTriangle,
         faExternalLinkAlt, faTimes,
         faBars, faAngleLeft,
         faStar, faStarHalf,
         faCalendarDay, faComment, faCheck,
         faUser, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faInfoCircle, faCheckCircle,
            faExclamationCircle, faExclamationTriangle,
            faExternalLinkAlt, faTimes, faBars, faAngleLeft,
            faStar, faStarHalf, faCalendarDay,faComment, faCheck,
            faUser, faCertificate,
            faGithub, faLinkedin, faLinkedinIn)
// Load icons
dom.watch()
