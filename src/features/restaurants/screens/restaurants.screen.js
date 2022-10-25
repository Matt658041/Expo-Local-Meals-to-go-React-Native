import React, { useContext} from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, StyleSheet } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})`

`;


export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext)
 
  return (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
         return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )
        }}
      keyExtractor={(item) => item.name}
      
    />
  </SafeArea>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
