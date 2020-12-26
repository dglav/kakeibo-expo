import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Card,
  Datepicker,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";

const HomeScreen = () => {
  const [displayAddPurchaseForm, setDisplayAddPurchaseForm] = useState<boolean>(
    false
  );
  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseCost, setPurchaseCost] = useState<string>("");
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {!displayAddPurchaseForm && (
        <Button onPress={() => setDisplayAddPurchaseForm(true)}>Home</Button>
      )}
      {displayAddPurchaseForm && (
        <Card style={{ width: "90%" }}>
          <Text>Purchase Name</Text>
          <Input
            placeholder="What did you buy?"
            value={purchaseName}
            onChangeText={(nextValue) => setPurchaseName(nextValue)}
          />
          <Text>Purchase Amount</Text>
          <Input
            keyboardType="number-pad"
            placeholder="How much was it?"
            value={purchaseCost}
            onChangeText={(nextValue) => setPurchaseCost(nextValue)}
          />
          <Text>Purchase Date</Text>
          <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
          <Text>Purchase Category</Text>
          <Select
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
          <View style={{ display: "flex", marginTop: 16 }}>
            <Button
              status="primary"
              onPress={() => setDisplayAddPurchaseForm(false)}
              style={{ marginBottom: 12 }}
            >
              Submit
            </Button>
            <Button
              status="basic"
              appearance="outline"
              onPress={() => setDisplayAddPurchaseForm(false)}
            >
              Cancel
            </Button>
          </View>
        </Card>
      )}
    </Layout>
  );
};

export default HomeScreen;
