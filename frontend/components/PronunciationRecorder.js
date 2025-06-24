import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PronunciationRecorder() {
  const [transcript, setTranscript] = useState('');
  const [correction, setCorrection] = useState('');
  const [recording, setRecording] = useState(false);

  const handleRecord = () => {
    setRecording(true);
    // TODO: integrate speech recognition
  };

  const handleStop = () => {
    setRecording(false);
    // TODO: stop recording and send audio to backend
  };

  return (
    <View style={styles.container}>
      <Button onPress={recording ? handleStop : handleRecord} title={recording ? 'Stop' : 'Record'} />
      <Text style={styles.label}>You said: {transcript || '---'}</Text>
      <Text style={styles.label}>Correction: {correction || '---'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
});
