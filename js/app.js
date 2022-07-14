
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


          <div style="font-family: monospace" class="row">
            <div class="card">
            <img
            src="https://robohash.org/gitmark:01be934fcebf5a1d81f47607af5d9f6080cc2401a4ca1d23c830e95d3caa6f27:0"
          />

              <p>
              Name: ${doc.gitmark['nick']} <br/>
              Energy: ${doc.energy} Marks <br/>
              Birth: ${doc.birth} <br/>
        Prev: <a style="color: blue" href="${doc.previous}">${di
      .data.previous}</a> <br/>
        Next: <a style="color: blue" href="${doc.next}">${doc
      .next}</a> <br/>
      Address: <a style="color: blue" href="https://chainz.cryptoid.info/marks/address.dws?${di
      .data.address}.htm" target="_blank">${doc.address}</a> <br/>
        Nostr: <a  style="color: blue" href="http://bitbots.org:2617/?pubkey=${doc.nostrkey}" target="_blank">${doc.nostrkey}</a>

              </p>
            </div>
          </div>



          <${Bookmarks} bookmarks="${bookmarks}" />


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
