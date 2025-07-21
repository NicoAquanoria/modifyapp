import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewStyle, TextStyle, ImageSourcePropType, ActivityIndicator } from 'react-native';

export interface CardProps {
  title?: string;
  content?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  onPress,
  loading = false,
  style,
  titleStyle,
  contentStyle,
}) => {
  if (loading) {
    return (
      <View style={[styles.card, style, styles.loadingCard]}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={onPress ? 0.85 : 1}
      disabled={!onPress}
    >
      {image && <Image source={image} style={styles.image} resizeMode="cover" />}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {content && <Text style={[styles.content, contentStyle]}>{content}</Text>}
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    alignItems: 'flex-start',
    minWidth: 200,
    minHeight: 80,
  },
  loadingCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 14,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  content: {
    fontSize: 15,
    color: '#555',
    fontWeight: '400',
  },
}); 