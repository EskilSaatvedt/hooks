# Learning hooks and context
Hook and context workshop October 2023
@author Eskil Saatvedt

## Exercise 1
Branch /Exercise1
Download the project from github
git checkout barbone

Add a UserContext and send the user to the header components were it is displayed

## Exercise 2 
Branch /Exercise2

Add a SpaceFranchisesProvider, using the hook-provider pattern to send the franchises to the header component

## Exercise 3
Store the favourite to local storage in the FavouritePlanet component

## Exercise 4
Make a Planet provider
Make a usePlanet hook
Make a useStorage hook

Move all logic from the FavouritePlanet component to the usePlanet hook 
Move all save to local storage to the useStorage hook

Combine the two hooks

## Exercise 5
We are done, but while you wait for the others try:
Add more planets
Make it look pretty
Write tests
Add pictures
Help the others!
Make a useSessionStorage
Make a useServerStorage
Make a wrapper function for the three storage hooks
