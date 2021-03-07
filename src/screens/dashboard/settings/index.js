import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {PRIMARY_COLOR} from '../../../constants/colors';
import Header from '../../../global/navigations/Header';

class Settings extends Component {
  render() {
    return (
      <View>
        <Header title="About" />
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              padding: 20,
              margin: 20,
              borderRadius: 4,
              borderTopColor: PRIMARY_COLOR,
              borderTopWidth: 5,
            }}>
            <Text style={{fontSize: 20, marginBottom: 8, fontWeight: 'bold'}}>
              FOOD GUIDE
            </Text>
            <Text style={{textAlign: 'left'}}>
              {`1. MILK

ALSO RELEVANT TO:

people with lactose intolerance (though many can tolerate yogurt and aged cheeses)
vegans
Foods to Avoid: Cow's milk and all food products-including butter, buttermilk, cheese, cream cheese, cream, half and half, ice cream, cottage cheese, yogurt, pudding, sour cream-made from it. Plus, many (but not all) people who are allergic to cow's milk are sensitive to proteins in goat's milk and sheep's milk too.

Common Hidden Sources: Deli meats and hot dogs, veggie burgers, sorbet, canned tuna, chocolate, nondairy creamers, commercial breads and rolls, salad dressings and mayonnaise.

Delicious Swaps:

Substitute an equal amount of rice milk, soymilk or almond milk in recipes.
Blend soy yogurt into smoothies.
Make a cheeseless pesto.
Bake cookies with nonhydrogenated margarine, soy/rice milk, dairy-free chocolate chips.

2. EGG

ALSO RELEVANT TO:

vegans
Foods to Avoid: Eggs
Note: Some people are so sensitive to egg proteins that cooking fumes can stoke an allergic reaction.

Common Hidden Sources: Ice creams, egg substitutes, pastas, candies, hot dogs, meatballs, breads, rolls and other baked goods, mayonnaise, meringues, marshmallows, nougat and marzipan.

Delicious Swaps:

Sub mashed avocado, hummus or tapenade for mayo on sandwiches.
Scramble tofu with salsa, black beans and a little cheese.
Make your own frozen yogurt instead of eating commercial ice cream.

3. PEANUT

Foods to Avoid: Peanut butter, mixed nuts, beer nuts, peanut oil.
Note: Experts often caution those with peanut allergies to avoid tree nuts, due to cross-contamination risks. Plus, about one-third of those with an allergy to peanuts (which are legumes like beans) have or will develop an allergy to one or more true nuts, which grow on trees.

Common Hidden Sources: Sauces used in ethnic-Asian, African and Mexican-meals (e.g., mole), candy, chocolate, sunflower seeds and nut butters (which often are processed on shared equipment, so read labels to find ones that keep peanuts separate), some natural and artificial flavors and many other foods (i.e., read labels of all processed foods).

Delicious Swaps:

Dip apples in a little honey instead of peanut butter.
Pop some popcorn when craving a crunchy, salty snack.
Think outside the peanut butter-sandwich box: try turkey-cranberry, Cheddar-chutney, goat cheese roasted red pepper or a Strawberry & Cream Cheese Sandwich.

4. TREE NUTS

Foods to Avoid: Walnuts, almonds, cashews, pistachios, pecans, Brazil nuts, hazelnuts, chestnuts, macadamia nuts, pine nuts, and more.
Note: Experts often caution those with tree nut allergies to avoid peanuts too. (See explanation above.)

Common Hidden Sources: Cereals, chocolate, candies, marzipan, nougat, mortadella, pesto and some natural and artificial flavors (i.e., read labels of all processed foods).

Delicious Swaps:

Mix your own nut-free trail mix with a variety of favorite cereals, raisins and banana chips.
Try whole-grain croutons in salads to mimic the crunchy texture of nuts.

5. FISH

ALSO RELEVANT TO:

vegans
Foods to Avoid: Fish including tuna, salmon, catfish, and more.
Note: Experts often caution those allergic to fish to be aware of cross-contamination risks of eating shellfish and other seafood.

Common Hidden Sources: Caesar salad dressings (many contain anchovy paste), Worcestershire sauce, fish sauce, caponata, imitation crab meat (a.k.a., surimi).

Delicious Swaps:

Blend olives and sun-dried tomatoes into cream cheese as a substitute for smoked salmon on a bagel.
Prepare canned chicken as you would canned tuna.

6. SHELLFISH

ALSO RELEVANT TO:

vegans
Foods to Avoid: Shrimp, crab, lobster, crawfish, and more.
Note: Experts often caution those allergic to fish to be aware of cross-contamination risks of eating fish and other seafood.

Common Hidden Sources: Fish stocks, flavorings (anything labeled "natural and/or artificial flavorings" may contain fish by-products).

Delicious Swaps:

Try risotto cakes instead of crab cakes.
Stir up a festive paella using a variety of meats and veggies instead of shellfish.

7. SOY

Foods to Avoid: Soymilk, tofu, tempeh, edamame, soybeans, soy protein isolate, soy sauce, soy nuts, TVP or textured vegetable protein (defatted soy flour), tamari, miso.

Common Hidden Sources: Tuna, deli meats, hot dogs, vegetable broth, vegetable starch, textured vegetable protein, cereals, infant formulas, sauces, soups, many vegetarian products.

Delicious Swaps:

Make a stir-fry with seitan (wheat gluten) or chicken, plus veggies, ginger and garlic (skip the soy sauce!).
Try paneer (pressed Indian cheese) in your curry.
Enjoy fortified rice milk on cereal.

8. WHEAT

ALSO RELEVANT TO:

people with celiac disease
Foods to Avoid: Wheat-based pastas, cereals, breads, bran; wheat germ, wheat berries, semolina (a type of wheat used to make pasta), kamut (used in cereals, crackers and pasta), bulgur, seitan.

Common Hidden Sources: Ice creams, bouillon cubes, potato chips, deli meats, French fries, soy sauce, many processed snacks (too many to list), breadcrumbs, couscous, spelt, hot dogs.

Delicious Swaps:

Experiment with different pastas, including those made from corn, brown rice and quinoa.
Switch from flour to corn tortillas.
Use rice noodles for Asian-inspired dishes.`}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
