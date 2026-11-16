import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import * as Notifications from 'expo-notifications';

const API_BASE = 'https://ais-dev-lzqz4jtnj7rm7zyfkdxy7d-670342231592.us-east1.run.app';

export default function HeartvyraMobileApp() {
  const [tab, setTab] = useState<'inicio' | 'modelos' | 'nexus' | 'carrinho' | 'pedidos'>('inicio');
  const [models, setModels] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    fetch(`${API_BASE}/api/bootstrap`)
      .then((r) => r.json())
      .then((d) => setModels(d.models || []))
      .catch(() => {});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#05070D" />
      <View style={styles.header}>
        <Text style={styles.brand}>HEARTVYRA <Text style={{ color: '#F97316' }}>DIGITAL</Text></Text>
        <Text style={styles.sub}>App Nativo Android & iOS</Text>
      </View>
      <ScrollView style={styles.body}>
        <Text style={styles.heading}>Transformamos Ideias em Tecnologia</Text>
        <Text style={styles.copy}>Explore modelos, crie com Nexus AI, gerencie seu carrinho e acompanhe pedidos em tempo real com notificações push.</Text>
        {models.slice(0, 6).map((m) => (
          <View key={m.id} style={styles.card}>
            <Text style={styles.cardTitle}>{m.title}</Text>
            <Text style={styles.cardMeta}>{m.category} · Consultar valores com programador</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.tabBar}>
        {(['inicio', 'modelos', 'nexus', 'carrinho', 'pedidos'] as const).map((t) => (
          <TouchableOpacity key={t} onPress={() => setTab(t)} style={styles.tabBtn}>
            <Text style={[styles.tabText, tab === t && { color: '#F97316' }]}>{t.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#05070D' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#1E293B' },
  brand: { color: '#F8FAFC', fontSize: 18, fontWeight: '700' },
  sub: { color: '#94A3B8', fontSize: 12, marginTop: 2 },
  body: { flex: 1, padding: 16 },
  heading: { color: '#FFFFFF', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  copy: { color: '#CBD5E1', fontSize: 14, lineHeight: 20, marginBottom: 16 },
  card: { backgroundColor: '#0F172A', padding: 14, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#1E293B' },
  cardTitle: { color: '#F8FAFC', fontSize: 15, fontWeight: '600' },
  cardMeta: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  tabBar: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#1E293B', paddingVertical: 12, backgroundColor: '#0B1120' },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabText: { color: '#94A3B8', fontSize: 10, fontWeight: '600' },
});
