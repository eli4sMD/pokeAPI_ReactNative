import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');
const scale = width / 400;

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  listContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width - (1 * scale),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10@s',
    padding: '10@s',
    margin: '10@s',
    width: (width - (40 * scale)) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: '1@s',
    },
    shadowOpacity: 0.22,
    shadowRadius: '2.22@s',
    elevation: '3@s',
    alignItems: 'center',
  },
  image: {
    width: '100@s',
    height: '100@s',
  },
  name: {
    fontSize: '18@s',
    fontWeight: 'bold',
    marginTop: '10@s',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: '5@s',
    paddingVertical: '5@s',
    paddingHorizontal: '10@s',
    marginTop: '10@s',
  },
  pokeimg: {
    marginBottom: '20@s',
    marginTop: '10@s',
    width: '300@s',
    height: '110@s',
    resizeMode: 'cover'
  },
});
