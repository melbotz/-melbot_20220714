
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
import Navbar from '../components/Navbar.js'
import Bookmarks from '../components/Bookmarks.js'

// INIT
var doc = di.data
var bookmarks = doc.bookmark

// RENDER
render(
  html`
          <${Navbar} title="${di.data.gitmark['nick']}" />

          <img
            src="https://robohash.org/gitmark:01be934fcebf5a1d81f47607af5d9f6080cc2401a4ca1d23c830e95d3caa6f27:0"
          />

          <pre>

                  Name: ${doc.gitmark['nick'] + '\n'}
                  Birth: ${doc.birth} ${'\n'}
                  Energy: ${doc.energy} Marks ${'\n'}
                  Address: <a style="color: blue" href="https://chainz.cryptoid.info/marks/address.dws?${di
      .data.address}.htm" target="_blank">${doc.address}</a> ${'\n'}
            Previous: <a style="color: blue" href="${doc.previous}">${di
      .data.previous}</a> ${'\n'}
            Next: <a style="color: blue" href="${doc.next}">${doc
      .next}</a> ${'\n'}
            Nostr: <a  style="color: blue" href="http://bitbots.org:2617/?pubkey=${doc.nostrkey}" target="_blank">${doc.nostrkey}</a>


          </pre>
          <h4>Activity</h4>
          <pre>
      <a style="color: blue"
                  href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
                  target="_blank"
                  >Genesis</a
                >
                  </pre>


          <${Bookmarks} bookmarks="${bookmarks}" />

          <footer>
            |
            <a
              style="color: blue"
              href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
              target="_blank"
              >${doc.gitmark['@id']}</a
            >
            |
          </footer>
        `,
  document.body
)

console.log(doc)
