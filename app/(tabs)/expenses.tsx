import { TableBody, TableData, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Table } from '@expo/html-elements';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>Rajesh Kumar</TableData>
            <TableData>10</TableData>
            <TableData>$130</TableData>
          </TableRow>
          <TableRow>
            <TableData>Priya Sharma</TableData>
            <TableData>12</TableData>
            <TableData>$210</TableData>
          </TableRow>
          <TableRow>
            <TableData>Ravi Patel</TableData>
            <TableData>6</TableData>
            <TableData>$55</TableData>
          </TableRow>
          <TableRow>
            <TableData>Ananya Gupta</TableData>
            <TableData>18</TableData>
            <TableData>$340</TableData>
          </TableRow>
          <TableRow>
            <TableData>Arjun Singh</TableData>
            <TableData>2</TableData>
            <TableData>$35</TableData>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead>Total</TableHead>
            <TableHead>48</TableHead>
            <TableHead>$770</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
