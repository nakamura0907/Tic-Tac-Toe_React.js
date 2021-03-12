import { css } from '@emotion/react';

const style = css`
  text-align: center;

  h2 {
    text-align: left;
  }

  .history__score,
  .history__list {
    margin-bottom: 20px;
  }

  .history__list {
    select {
      width: 100%;
    }

    ul {
      padding: 0;
      list-style-type: none;
    }
    li {
      margin-bottom: 10px;
    }
  }
`;

export default style;
