import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {bandara, maskapai, jadwal} from '../data';

export default function HasilPencarianPage({ route, navigation }){

  const { berangkat, tujuan, tanggal } = route.params;

  const [hasil, setHasil] = useState(()=>{
    return jadwal.filter((jadwal)=>{
      return (jadwal.bandara_kode_keberangkatan === berangkat && 
         jadwal.bandara_kode_tujuan === tujuan && jadwal.tanggal === tanggal)    
    })
  });

  return (
    <ScrollView>
      {(hasil.length !=0) &&
        <View>
        <Text> Hasil Pencarian:  </Text>
        {hasil.map((jadwal)=>{
            return ( <View style={styles.containerHasil} key={jadwal.jadwal_id}>
                <View style={styles.containerJadwal}>
                  <Text>{bandara.find(bandara => bandara.bandara_kode === jadwal.bandara_kode_keberangkatan).bandara_nama}</Text>
                  <Text>{bandara.find(bandara => bandara.bandara_kode === jadwal.bandara_kode_tujuan).bandara_nama}</Text>
                </View>
                <View style={styles.containerJadwal2}>
                  <Image source={require('./asset/icon/plane.png')} style={styles.iconStyle} />
                  <Text>{maskapai.find(maskapai => maskapai.maskapai_id === jadwal.maskapai_id).maskapai_nama}</Text>
                  <Text style={styles.tanggal}>{jadwal.tanggal}</Text>
                </View>
              
              </View>
            )
          })}
        </View>
      }

      {(hasil.length === 0) &&
        <Text> Hasil Pencarian Tidak Ditemukan </Text>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHasil: {
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    padding: '5%',
    borderRadius: 10,
    marginBottom: 20
  },
  containerJadwal: {
    flex:1,
    width: '100%',
    flexDirection: "row"
  },
  containerJadwal2: {
    flex:1,
    width:'100%',
    flexDirection: "row",
    marginTop: 30,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginEnd: 5,
    marginVertical: "auto"
  },
  tanggal: {
    marginStart: 15,
  },
});
