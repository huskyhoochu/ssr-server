import fs from 'fs';
import express from 'express';

export default (
  html: (req: express.Request) => { helmet: any, html: string, preloadedState: JSON },
  htmlPath: string
  ) => (req: express.Request, res: express.Response) => {
  const result = html(req);

  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(
      data
        .replace(
          '<div id="root"></div>', `<div id="root">${result.html}</div>`
        )
        .replace(
          '<title>React App</title>',
          result.helmet.title.toString(),
        )
        .replace(
          '<script type="text/javascript">window.__PRELOADED_STATE__={}</script>',
          `<script type="text/javascript">window.__PRELOADED_STATE__=${
            result.preloadedState
          }</script>`,
        ),
    );
  })
}
