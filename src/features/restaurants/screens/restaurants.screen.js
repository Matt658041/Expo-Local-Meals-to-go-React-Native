import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
 flex: 1;
 margin-top: ${StatusBar.currentHeight}px; 
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
flex: 1;
padding: 16px;
background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);

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
