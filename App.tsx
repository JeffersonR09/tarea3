import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Cliente } from './models/cliente';
import { Journal } from './models/journal';



export default function App() {
  const cliente = new Cliente('juan', 'perez')
  const journal = new Journal(new Date(), cliente, 'venta de computadora');
 
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 2200,
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 2200,
    operation: 'C'
  });

  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 1200,
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 1200,
    operation: 'C'
  });

  console.log(cliente);
  console.log(journal);
  
  
  console.log(' Total Debit:::::',journal.getTotalDebit());
  console.log(' Total Credit:::::',journal.getTotalCredit());
  console.log('Los totales son iguales?: ', journal.validateTotalAreEquals());
  
  console.log(journal.deliteLine() === undefined);
  




  return (
    <View style={styles.container}>
      <Text>Diseña tu app!</Text>
      <Text>Hola!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
