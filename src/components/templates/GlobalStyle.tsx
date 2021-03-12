import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        div#root {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
          font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka,
            'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
        }
        div#root > header.header {
          grid-column: 1/2;
          grid-row: 1/2;
        }
        div#root > main.main {
          grid-column: 1/2;
          grid-row: 2/3;
          width: 80%;
          max-width: 620px;
          margin: 0 auto;
        }
        div#root > footer.footer {
          grid-column: 1/2;
          grid-row: 3/4;
        }
        h1,
        h2,
        h3 {
          font-family: 'YuMincho', 'Hiragino Mincho ProN', 'Yu Mincho',
            'MS PMincho', serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
