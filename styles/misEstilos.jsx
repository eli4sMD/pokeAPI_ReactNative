import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');
const scale = width / 400;

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  listContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width - (1 * scale),
  },
  card: {
    backgroundColor: '#f0f0f040',
    borderRadius: '10@s',
    padding: '10@s',
    margin: '5@s',
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
    width: '150@s',
    height: '150@s',
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
    alignSelf: 'center',
  },
  pokeimgCenter: {
    marginTop: '155@s',
    width: '300@s',
    height: '110@s',
    alignSelf: 'center',
  },
  pokeFondo:{
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    borderColor: '#2d6ab3',
    borderWidth: '2@s',
    borderRadius: '7@s',
    color: '#ffcc01',
    textAlign: 'center'
  }
});
