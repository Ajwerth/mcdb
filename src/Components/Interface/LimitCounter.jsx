// Dependency Imports
import React from 'react';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';

// ----------Start Styled Components----------
const ButtonContainer = Styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 10px;
`;

// ----------End Styled Components----------


class LimitCounter extends React.Component {
  state = { limit: 20 };

  incrementCounter = (incrementValue) => {
    this.setState(prevState => ({
      limit: prevState.counter + incrementValue,
    }));
  };

  render() {
    return (
      <ButtonContainer>
        <Button incrementValue={20} onClickFunction={this.incrementLimit} />
      </ButtonContainer>
    );
  }
}

export default LimitCounter;
