import React, {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';
import RNRestart from 'react-native-restart';
import styles from './errorBoundary.styles';

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show
    return {hasError: true};
  }

  componentDidCatch(error: Error) {
    //log error to crash reporter
  }

  onRestartPressed = () => {
    RNRestart.restart();
  };

  fallback = (
    <View style={styles.container}>
      <Text>Sorry, some problem occurred. Please restart the app.</Text>
      <Button
        color={'green'}
        title="Restart App"
        onPress={this.onRestartPressed}
      />
    </View>
  );

  render() {
    if (this.state.hasError) {
      return this.fallback;
    }

    return this.props.children;
  }
}
