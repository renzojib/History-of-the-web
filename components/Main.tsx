import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ArticleProps {
  title: string;
  content: string;
  author?: string;
  date?: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, author, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {author && <Text style={styles.author}>By {author}</Text>}
      {date && <Text style={styles.date}>{date}</Text>}
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});