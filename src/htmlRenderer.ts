import fs from 'fs';
import express from 'express';

export default (html: string, htmlPath: string) => (req: express.Request, res: express.Response) => {
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(
      data.replace(
        '<div id="root"></div>', ` <div id="root">${html}</div>`
      ),
    );
  })
}
