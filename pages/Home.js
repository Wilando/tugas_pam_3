import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {bandara, jadwal} from '../data';

export default function Home({ navigation }) {
  
  const [berangkatOpen, setBerangkatOpen] = useState(false);
  const [tujuanOpen, setTujuanOpen] = useState(false);
  const [tanggalOpen, setTanggalOpen] = useState(false);

  const [valueBerangkat, setValueBerangkat] = useState(null);
  const [valueTujuan, setValueTujuan] = useState(null);
  const [valueTanggal, setValueTanggal] = useState(null);
  const [bandaraData, setBandaraData] = useState(bandara);
  const [jadwalData, setJadwalData] = useState( () => {
    return jadwal.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.tanggal === thing.tanggal
      ))
    )}
  );


  const onBerangkatOpen = useCallback(() => {
    setTujuanOpen(false);
    setTanggalOpen(false);
  }, []);

  const onTujuanOpen = useCallback(() => {
    setBerangkatOpen(false);
    setTanggalOpen(false);
  }, []);

  const onTanggalOpen = useCallback(() => {
    setBerangkatOpen(false);
    setTujuanOpen(false);
  }, []);

  return (
  
    <View style={styles.container}>
      <Text style={styles.headerText}>Hiling.id </Text>
      <View style={styles.containerInput}>
        <View style={styles.input1}>
          <Text style={styles.label}>Lokasi Keberangkatan: </Text>
          <View style={styles.input}>
            <Image source={require('./asset/icon/takeoff.png')} style={styles.iconStyle} />
            <DropDownPicker
              open={berangkatOpen}
              onOpen={onBerangkatOpen}
              value={valueBerangkat}
              items={bandaraData}
              setItems={setBandaraData}
              setOpen={setBerangkatOpen}
              setValue={setValueBerangkat}
              searchable={true}
              placeholder="Cari Lokasi Keberangkatan"
              schema={{
                label: 'bandara_nama',
                value: 'bandara_kode',
              }}
              zIndex={3000}
              zIndexInverse={1000}
              listMode="SCROLLVIEW"
            />
          </View>
        </View>
        <View style={styles.input2}>
          <Text style={styles.label}>Lokasi Tujuan: </Text>
          <View style={styles.input}>
            <Image source={require('./asset/icon/land.png')} style={styles.iconStyle} />
            <DropDownPicker
              open={tujuanOpen}
              onOpen={onTujuanOpen}
              value={valueTujuan}
              items={bandaraData}
              setItems={setBandaraData}
              setOpen={setTujuanOpen}
              setValue={setValueTujuan}
              searchable={true}
              placeholder="Cari Lokasi Tujuan"
              schema={{
                label: 'bandara_nama',
                value: 'bandara_kode'
              }}
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>
        <View style={styles.input3}>
          <Text style={styles.label}>Tanggal Keberangkatan: </Text>
          <View style={styles.input}>
            <Image source={require('./asset/icon/calendar.png')} style={styles.iconStyle} />
            <DropDownPicker
              open={tanggalOpen}
              onOpen={onTanggalOpen}
              value={valueTanggal}
              items={jadwalData}
              setItems={setJadwalData}
              setOpen={setTanggalOpen}
              setValue={setValueTanggal}
              searchable={true}
              placeholder="Cari Tanggal"
              schema={{
                label: 'tanggal',
                value: 'tanggal'
              }}
              zIndex={1000}
              zIndexInverse={3000}
              dropDownDirection="TOP"
            />
          </View>
        </View>
        <Button
          title="Cari"
          onPress={() => navigation.navigate('Pencarian', {berangkat: valueBerangkat , tujuan: valueTujuan , tanggal:valueTanggal})}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 'auto'
  },
  containerInput: {
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    width: '95%',
    padding: '5%',
    borderRadius: 10,
  },
  input1: {
    marginBottom: '20%',
    
  },
  input2: {
    marginBottom: '20%',
    
  },
  input3: {
    marginBottom: '20%',
    
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginEnd: 5,
    marginVertical: "auto"
  },
  input: {
    flex:1,
    width: '90%',
    flexDirection: "row"

  }
});
