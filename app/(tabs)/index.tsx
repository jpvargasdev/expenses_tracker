import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { VStack } from "@/components/ui/vstack"
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { Heading } from '@/components/ui/heading';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui/select';

export default function Index() {
  return (
    <View style={styles.container}>
      <Center>
        <Box className="p-5 max-w-96 border border-background-300 rounded-lg">

          <VStack className="pb-4" space="xs">
            <Heading className="leading-[30px]">Add the expense value</Heading>

            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}  
            >
              <InputField placeholder="Expense value" />

            </Input>
          </VStack>


          <VStack className="pb-4" space="xs">
            <Heading className="leading-[30px]">Add the description</Heading>
          </VStack>
          <VStack space="xl" className="py-2">
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="w-64"
            >
              <TextareaInput placeholder="Description" />
            </Textarea>
          </VStack>


          <VStack className="pb-4" space="xs">
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select Category" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem label="UI Designing" value="ui" isDisabled={true} />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>          
          </VStack>

          <VStack className="pb-4" space="xs">
            <Select>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select Currency" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="SEK" value="SEK" />
                  <SelectItem label="COP" value="COP" />
                  <SelectItem label="CYN" value="CYN" />
                  <SelectItem label="EUR" value="EUR" />
                  <SelectItem label="USD" value="USD" />

                </SelectContent>
              </SelectPortal>
            </Select>          
          </VStack>



          <VStack space="lg" className="pt-4">
            <Button size="sm">
              <ButtonText>Create Expense</ButtonText>
            </Button>
          </VStack>
        </Box>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
