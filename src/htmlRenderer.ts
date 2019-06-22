import fs from 'fs';
import express from 'express';

export default (
  html: { html: string, preloadedState: JSON },
  htmlPath: string
  ) => (req: express.Request, res: express.Response) => {
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(
      data
        .replace(
          '<div id="root"></div>', `<div id="root">${html.html}</div>`
        )
        .replace(
          '<script type="text/javascript">window.__PRELOADED_STATE__={}</script>',
          `<script type="text/javascript">window.__PRELOADED_STATE__=${
            html.preloadedState
          }</script>`,
        ),
    );
  })
}
