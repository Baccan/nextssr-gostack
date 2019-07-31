import React, { Component } from "react";
import { loadGetInitialProps } from "next-server/dist/lib/utils";
import ReactGA from "react-ga";

// Exemplo de HOC
// export default connect()(Component);

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("PAGE VIEW");

      ReactGA.initialize("ID_ANALYTICS_DO_GOOGLE");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      // Todas as props passadas para este componente vindas do filho, devem ser repassadas novamente ao filho <Composed>
      return <Composed {...this.props} />;
    }
  };
