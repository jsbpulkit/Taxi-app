import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import receiptData from '../data/mockReceiptData.json';

// TypeScript interfaces
interface Company {
  name: string;
  address: string;
  email: string;
  phone: string;
}
interface Duty {
  date: string;
  time: string;
  id: string;
  type: string;
  bookedBy: string;
  vehicle: string;
  driver: string;
}
interface LocationDetail {
  time: string;
  location: string;
}
interface DropDetail {
  location: string;
}
interface KMInfo {
  start: number;
  end: number;
  total: number;
  extra: number;
}
interface TimeInfo {
  start: string;
  end: string;
  totalHours: string;
  extraHours: string;
}
interface Charge {
  title: string;
  amount: number;
}
interface ReceiptData {
  company: Company;
  duty: Duty;
  reporting: LocationDetail;
  drop: DropDetail;
  km: KMInfo;
  time: TimeInfo;
  charges: Charge[];
}


const ReceiptComponent: React.FC = () => {
  const data = receiptData as ReceiptData;
  const { company, duty, reporting, drop, km, time, charges } = data;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.header}>{company.name}</Text>
        <Text style={styles.text}>{company.address}</Text>
        <Text style={styles.text}>
          Email: {company.email} | Phone: {company.phone}
        </Text>
      </View>

      {/* Duty Info */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>📝 COMPLETED DUTY SLIP</Text>
        <Text>Duty ID: {duty.id}</Text>
        <Text>Type: {duty.type}</Text>
        <Text>Booked By: {duty.bookedBy}</Text>
        <Text>Vehicle: {duty.vehicle}</Text>
        <Text>Driver: {duty.driver}</Text>
      </View>

      {/* Trip Info */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>📍 Trip Details</Text>
        <Text>Reporting Time: {reporting.time}</Text>
        <Text>Reporting Address: {reporting.location}</Text>
        <Text>Drop Address: {drop.location}</Text>
      </View>

      {/* KM & Time Info Table */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>📊 KM & Time Info</Text>
        <View style={styles.tableGrid}>
          {/* Header Row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableHeaderCell}></Text>
            <Text style={styles.tableHeaderCell}>Start</Text>
            <Text style={styles.tableHeaderCell}>End</Text>
            <Text style={styles.tableHeaderCell}>Total</Text>
            <Text style={styles.tableHeaderCell}>Extra</Text>
          </View>

          {/* KM Row */}
          <View style={styles.tableRow}>
            <Text style={styles.rowLabelCell}>KM</Text>
            <Text style={styles.tableCell}>{km.start}</Text>
            <Text style={styles.tableCell}>{km.end}</Text>
            <Text style={styles.tableCell}>{km.total}</Text>
            <Text style={styles.tableCell}>{km.extra}</Text>
          </View>

          {/* Time Row */}
          <View style={styles.tableRow}>
            <Text style={styles.rowLabelCell}>Time</Text>
            <Text style={styles.tableCell}>{time.start}</Text>
            <Text style={styles.tableCell}>{time.end}</Text>
            <Text style={styles.tableCell}>{time.totalHours}</Text>
            <Text style={styles.tableCell}>{time.extraHours}</Text>
          </View>
        </View>
      </View>

      {/* Charges Table */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>💰 Charges</Text>
        <View style={styles.tableGrid}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeaderCell, { flex: 2 }]}>Charge Type</Text>
            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Amount (₹)</Text>
          </View>
          {charges.map((charge, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={[styles.tableCell, { flex: 2 }]}>{charge.title}</Text>
              <Text style={[styles.tableCell, { flex: 1 }]}>
                {charge.amount.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Signature */}
      <View style={styles.signatureBox}>
        <Text style={styles.signatureLabel}>Customer Signature:</Text>
        <View style={styles.signatureLine} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
  },
  headerBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  sectionBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A237E',
    marginBottom: 10,
  },
  tableGrid: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 8,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#E8EAF6',
    fontSize: 14,
    color: '#1A237E',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  rowLabelCell: {
    flex: 1,
    padding: 8,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    borderRightWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F0F0F0',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  signatureBox: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  signatureLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  signatureLine: {
    height: 1,
    backgroundColor: '#000',
    width: '60%',
  },
});

export default ReceiptComponent;
