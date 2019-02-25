import React from 'react';
import { View } from 'react-native';

const PageBackground = () => {

  const gradientHeight = 200;
  const gradientBackground = 'purple';
  const data = Array.from({ length: gradientHeight });

  return (
    <View style={{ flex: 1 }}>
      {data.map((_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            backgroundColor: gradientBackground,
            height: 1,
            bottom: (gradientHeight - i),
            right: 0,
            left: 0,
            zIndex: 1,
            opacity: (1 / gradientHeight) * (i + 1)
          }}
        />
      ))}
    </View>
  );
}

export { PageBackground }