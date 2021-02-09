import {WOMENDATA} from './women-data';

export const data = {
  women: WOMENDATA,
  men: {
    title: 'Men',
    image: require('../assets/images/men.jpg'),
    categories: [
      {
        title: 'MUSCLE GAIN WORKOUT',
        image: require('../assets/images/menworkout1.jpg'),
        type: 'WORKOUT',
        data: [
          {
            title: 'DAY 1: CHEST + BACK',
            exercises: [
              {
                image: require('../assets/images/widepushupmen.gif'),
                title: 'WIDE PUSH-UP',
                description: `Squeeze your glutes, thighs, and ankles together, and brace your core. Keeping your elbows pulled in (as much as you can), lower your body until your chest is almost touching the floor. Push your body back up and repeat. 
                  3 Set 10/12 REPS
                  `,
                count: 12,
              },
              {
                image: require('../assets/images/wide-grip-pull-up-men.gif'),
                title: 'WIDE GRIP PULL-UP',
                description: `Grasp the bar with an overhand grip with your hands just wider than shoulder-width apart. Let your body hang straight down with your arms fully extended. Pull up and squeeze your lats until your chin is over the bar, before lowering slowly to the start position without swinging.
                  3 Sets 6/8 REPS
                  `,
                count: 8,
              },
              {
                image: require('../assets/images/chair-dip-men.gif'),
                title: 'CHAIR DIPS',
                description: `Move your torso forward off the chair with your arms extended. Your buttocks should hover over the floor and your knees should be slightly bent. Your heels should touch the floor a few inches in front of your knees. Breathe in as you slowly lower your body, hinging at the elbows until each forms a 90-degree angle.
                  3 SET 2/4 REPS
                  `,
                count: 4,
              },
              {
                image: require('../assets/images/decline-push-up-men.gif'),
                title: 'Decline push-ups',
                description: `Kneel down with your back to the bench. Put your hands on the floor, shoulders over your wrists and elbows at 45 degrees. ...
                Brace your core, glutes, and quads. ...
                Push into the floor to return to starting position, extending your elbows.
                Complete 2 to 4 sets of 8 to 20 repetitions.
                  `,
                count: 20,
              },
            ],
          },
          {
            title: 'DAY 2: REST',
            type: 'REST',
          },
          {
            title: 'DAY 3: SHOULDER + ARMS',
            exercises: [
              {
                image: require('../assets/images/arm-circle-men.gif'),
                title: 'ARM CIRCLE',
                description: `Standing with a flat back and tight core, raise your arms to the sides.
                While focusing on the shoulders, slowly rotate your arms in a circular motion. Start with small circles. Gradually increase the size of the circles.
                4 SET 4/8 REPS
                  `,
                count: 8,
              },
              {
                image: require('../assets/images/chair-dip-men.gif'),
                title: 'CHAIR DIPS',
                description: `Move your torso forward off the chair with your arms extended. Your buttocks should hover over the floor and your knees should be slightly bent. Your heels should touch the floor a few inches in front of your knees. Breathe in as you slowly lower your body, hinging at the elbows until each forms a 90-degree angle.
                  3 SET 2/4 REPS
                  `,
                count: 4,
              },
              {
                image: require('../assets/images/decline-push-up-men.gif'),
                title: 'Decline push-ups',
                description: `Kneel down with your back to the bench. Put your hands on the floor, shoulders over your wrists and elbows at 45 degrees. ...
                Brace your core, glutes, and quads. ...
                Push into the floor to return to starting position, extending your elbows.
                Complete 2 to 4 sets of 8 to 20 repetitions.
                  `,
                count: 20,
              },
              {
                image: require('../assets/images/plank-men.gif'),
                title: 'PLANK ',
                description: `Get into pushup position on the floor
                Now bend your elbows 90° and rest your weight on your forearms. Your elbows should be directly beneath your shoulders, and your body should form a straight line from your head to your feet. Hold the position for as long as you can. Your goal should be to hold it for two minutes.
                  `,

                count: 120,
              },
            ],
          },
          {
            title: 'DAY 4: ABS',

            exercises: [
              {
                image: require('../assets/images/hanging-leg-raise.gif'),
                title: 'Hanging leg raise',
                description: `Grab a pullup bar and lower yourself into a dead hang. Straighten your legs and pull your pelvis back slightly. Tense your core and raise your legs until your thighs are parallel with the floor. Hold for a count, then slowly lower your legs back to the starting position. 
                REPEAT 12-15 times
                  `,

                count: 15,
              },
              {
                image: require('../assets/images/crunch.gif'),
                title: 'Crunch',
                description: `Lie on your back, knees bent and feet flat on the floor. Put your hands behind your head, elbows facing out. With your low back on the floor, use your ab muscles to lift your upper body as far as you can. Hold the pose, then slowly return to the floor.
                REPEAT FOR 10-12 REPS
                  `,

                count: 12,
              },
              {
                image: require('../assets/images/side-plank-men.gif'),
                title: 'SIDE PLANK',
                description: `Start on your side with your feet together and one forearm directly below your shoulder. Contract your core and raise your hips until your body is in a straight line from head to feet. Hold the position for 2 minutes without letting your hips drop for the allotted time for each set, then repeat on the other side.
                `,

                count: 120,
              },
              {
                image: require('../assets/images/leg-raise-men.gif'),
                title: 'LEG RAISE',
                description: `Lie faceup on the floor with your legs straight and your palms facing down. This is the starting position. Without bending your legs, lift them toward the ceiling until your hips just leave the floor. Then lower your legs down to the starting position again.
                2 SETS REPEAT FOR 10-12 REPS
                  `,

                count: 12,
              },
            ],
          },
          {
            title: 'DAY 5: REST',
            type: 'REST',
          },
          {
            title: 'DAY 6: LEGS',

            exercises: [
              {
                image: require('../assets/images/lunges-men.gif'),
                title: 'LUNGES',
                description: `stand tall with feet hip width apart engage core take a big step forward with right leg and start to shift weight forward so heel hits the floor first . Lower body until right thigh is parallel to floor and right shin is vertical press into right heel to drive back up to starting position .
                Repeat 3 sets with 15 reps each
                  `,

                count: 15,
              },
              {
                image: require('../assets/images/squats-men.gif'),
                title: 'SQUATS',
                description: `Stand with your feet shoulder width apart and hold a barbell behind you at arms length. While keeping your head up and back straight, squat until your thighs are parallel to the floor. – Drive through your heels to stand back up as you breathe out. 
                REPEAT FOR 3 SETS 15 REPS
                  `,

                count: 15,
              },
              {
                image: require('../assets/images/calf-raise.gif'),
                title: 'CALF RAISE',
                description: `Stand tall and support a barbell on your upper back, with your toes facing forward. Raise both heels and contract your calves on each leg. Gradually return to the starting position.
                REPEAT 4 SETS WITH 10 REPS
                  `,

                count: 10,
              },
              {
                image: require('../assets/images/wall-sit-men.gif'),
                title: 'WALL SIT',
                description: `wall sitting places their back against a wall with their feet shoulder-width apart and a little ways out from the wall. Then, keeping their back against the wall, they lower their hips until their knees form right angles. This is a very intense work out for the quadriceps muscles.
                Repeat 3 set X 12 Reps
                  `,

                count: 12,
              },
            ],
          },
          {
            title: 'DAY 7: REST',
          },
        ],
      },
      {
        title: 'WEIGHT LOSS DIET',
        image: require('../assets/images/weight_loss_1.jpg'),
        type: 'DIET',
        data: `
        MUSCLE GAIN DIET
        
        MEN GAIN
        WEEK: 1&2
        
        Breakfast
        
        Eat two bananas with a glass of warm milk everyday for instant energy healthy weight gain.You can also drink it by grinding 2 bananas along with 1 glass of milk and teaspon of honey. Always choode ripe bananas
        
        Consume a handful of germinated seeds or sprouted nuts followed by two eggs in the morning.
        
        Oatmeal with milk is one of the healthiest breakfast to gain weight and to improve immunity power.
        
        Consume two eggs with fruit salad with a glass of milk.
        
        Wheat bread slices coated with peanut butter helps to gain weight quickly.
        
        Consume 5-6 almomds which are allowed to soak overnight in a glass of warm milk.
        
        Gain weight quickly by consuming a cup of raisins or dried grapes which are soaked overnight with a protein milkshake.
        
        Lunch
        
        Mix one tablespoon of clarified butter or ghee to two tablespoons of crushed sugar and eat it before 30 minutes of lunch.
        
        Include a bowl of white rice with chicken and one wheat bread with potato or cabbage or any curry which is rich in proteins followed by one cup of fresh yogurt or curd and raw vegetables or fruit salad for who are vegetarians.
        
        Eat a cup of white rice fish or red meat and 2-3 egg whites in your lunch followed by a cup of fresh curd and banana.
        
        Snack 
        
        Consume a handful of sprouted nuts along with 5-6 almonds.
        
        Have a fresh fruit salad with a protein milkshake.
        
        Eat 5-6 dates with a glass of warm milk.
        
        Comsume two oranges with a glass of fruit juice.
        
        Fried potatoes in olive oil help you to gain weight.
        
        Eat boiled peanuts or grounnuts with vegetable salads to gain weight.
        
        Dry fruits with a chocolate banana shake.
        
        Diet for Dinner 
        
        Avoid heavy diets at dinners like meat and fishes.
        
        Consume a cup of white rice or bread with green vegetables curry with curb and end up with banana for vegetarians.
        
        Nonvegetarians can add egg omelets or egg bhurji with a cup of rice and 2 breads followed by curb and banana.
        
        WEEK 3&4:
        
        Breakfast
        
        Select from one of the following menus:
        Orange juice (12-oz glass)
        Bowl of Cheerios (large) with granola added, skim milk
        Bagel or 2 slices pf wheat toast with tablespoon of peanut butter on each piece or Bagel with 1 tablespoon of peanut butter
        Smoothie, made with:
        1 scoop of protein in powder 8 ox yogurt 
        12 oz skim milk
        1 cuo of frozen fruit
        
        Lunch 
        
        Select from one of the following menus:
        Submarine sandwich on whole wheat (12- inch), made with one of the following proteins:
        Chicken
        Tuna
        Steak
        Or 
        Omelet with 3 eggs, cheese, vegetables,Hash browns toast (2 slices)
        After Snack
        Drink (choose one)
        Low- fat milk Juice
        
        Snack (choose one)
        Banana with peanut butter (2 tablespoons)
        Trail mix with cereal, nuts, and dried fruit (1 cup or 2 handfuls0
        Cheese and whole wheat crackers 
        Cereal ( large bowl)
        
        Dinner
        
        Split your plate evenly between protein and carbohydrates
        
        Protein (choose one)
        Steak
        Chicken
        Fish
        Pork
        Turkey
        
        Carbohydrates (choose one)
        Pasta
        Baked potato
        Rice 
        Corn
        
        Side (choose one)
        Salad 
        Cooked Vegetables
        Fruit
        
        Drink (choose one)
        Low-fat milk 
        Juice
`,
      },
      {
        title: 'WEIGHT GAIN WORKOUTS',
        image: require('../assets/images/menworkout2.jpg'),
        type: 'WORKOUT',
        data: [
          {
            title: 'DAY 1: BASICS',
            exercises: [
              {
                image: require('../assets/images/widepushupmen.gif'),
                title: 'WIDE PUSH-UP',
                description: `Squeeze your glutes, thighs, and ankles together, and brace your core. Keeping your elbows pulled in (as much as you can), lower your body until your chest is almost touching the floor. Push your body back up and repeat. 
                  3 Set 10/12 REPS
                  `,

                count: 12,
              },
              {
                image: require('../assets/images/chair-dip-men.gif'),
                title: 'CHAIR DIPS',
                description: `Move your torso forward off the chair with your arms extended. Your buttocks should hover over the floor and your knees should be slightly bent. Your heels should touch the floor a few inches in front of your knees. Breathe in as you slowly lower your body, hinging at the elbows until each forms a 90-degree angle.
                  3 SET 2/4 REPS
                  `,
                count: 4,
              },
              {
                image: require('../assets/images/inclined-push-up-men.gif'),
                title: 'INCLINE PUSH UP',
                description: `Lean in slightly and place your hands on the wall just wider than shoulder width. Slowly and deliberately bend the elbows and move in as close to the wall as possible, inhaling. Slowly and deliberately push off the wall until your elbows are straight, but not locked. Exhale as you push up.
                  3 SET 15 REPS
                  `,
                count: 15,
              },
              {
                image: require('../assets/images/wide-grip-pull-up-men.gif'),
                title: 'WIDE GRIP PULL-UP',
                description: `Grasp the bar with an overhand grip with your hands just wider than shoulder-width apart. Let your body hang straight down with your arms fully extended. Pull up and squeeze your lats until your chin is over the bar, before lowering slowly to the start position without swinging.
                  3 Sets 6/8 REPS
                  `,
                count: 8,
              },
            ],
          },
          {
            title: 'DAY 2: BACK + SHOULDER',
            exercises: [
              {
                image: require('../assets/images/wide-grip-pull-up-men.gif'),
                title: 'WIDE GRIP PULL-UP',
                description: `Grasp the bar with an overhand grip with your hands just wider than shoulder-width apart. Let your body hang straight down with your arms fully extended. Pull up and squeeze your lats until your chin is over the bar, before lowering slowly to the start position without swinging.
                  3 Sets 6/8 REPS
                  `,
                count: 8,
              },
              {
                image: require('../assets/images/arm-circle-men.gif'),
                title: 'ARM CIRCLE',
                description: `Standing with a flat back and tight core, raise your arms to the sides.
                While focusing on the shoulders, slowly rotate your arms in a circular motion. Start with small circles. Gradually increase the size of the circles.
                4 SET 4/8 REPS
                  `,
                count: 8,
              },
              {
                image: require('../assets/images/widepushupmen.gif'),
                title: 'WIDE PUSH-UP',
                description: `Squeeze your glutes, thighs, and ankles together, and brace your core. Keeping your elbows pulled in (as much as you can), lower your body until your chest is almost touching the floor. Push your body back up and repeat. 
                  3 Set 10/12 REPS
                  `,
                count: 12,
              },
            ],
          },
          {
            title: 'DAY 3: REST',
            type: 'REST',
          },
          {
            title: 'DAY 4: LEGS',
            exercises: [
              {
                image: require('../assets/images/lunges-men.gif'),
                title: 'LUNGES',
                description: `stand tall with feet hip width apart engage core take a big step forward with right leg and start to shift weight forward so heel hits the floor first . Lower body until right thigh is parallel to floor and right shin is vertical press into right heel to drive back up to starting position .
                Repeat 3 sets with 15 reps each
                  `,
                count: 15,
              },
              {
                image: require('../assets/images/squats-men.gif'),
                title: 'SQUATS',
                description: `Stand with your feet shoulder width apart and hold a barbell behind you at arms length. While keeping your head up and back straight, squat until your thighs are parallel to the floor. – Drive through your heels to stand back up as you breathe out. 
                REPEAT FOR 3 SETS 15 REPS
                  `,
                count: 15,
              },
              {
                image: require('../assets/images/calf-raise.gif'),
                title: 'CALF RAISE',
                description: `Stand tall and support a barbell on your upper back, with your toes facing forward. Raise both heels and contract your calves on each leg. Gradually return to the starting position.
                REPEAT 4 SETS WITH 10 REPS
                  `,
                count: 10,
              },
              {
                image: require('../assets/images/wall-sit-men.gif'),
                title: 'WALL SIT',
                description: `wall sitting places their back against a wall with their feet shoulder-width apart and a little ways out from the wall. Then, keeping their back against the wall, they lower their hips until their knees form right angles. This is a very intense work out for the quadriceps muscles.
                Repeat 3 set X 12 Reps
                  `,
                count: 12,
              },
            ],
          },
          {
            title: 'DAY 5: ARMS',

            exercises: [
              {
                image: require('../assets/images/decline-push-up-men.gif'),
                title: 'Decline push-ups',
                description: `Kneel down with your back to the bench. Put your hands on the floor, shoulders over your wrists and elbows at 45 degrees. ...
                Brace your core, glutes, and quads. ...
                Push into the floor to return to starting position, extending your elbows.
                Complete 2 to 4 sets of 8 to 20 repetitions.
                  `,
                count: 20,
              },
              {
                image: require('../assets/images/chair-dip-men.gif'),
                title: 'CHAIR DIPS',
                description: `Move your torso forward off the chair with your arms extended. Your buttocks should hover over the floor and your knees should be slightly bent. Your heels should touch the floor a few inches in front of your knees. Breathe in as you slowly lower your body, hinging at the elbows until each forms a 90-degree angle.
                3 SET 2/4 REPS
                  `,
                count: 4,
              },
              {
                image: require('../assets/images/close-push-up.gif'),
                title: 'CLOSE PUSH UP',
                description: `Start in pushup position, glutes squeezed and abs tight, hands slightly narrower than shoulder-width. Your shoulders, elbows, and wrists should be stacked. Keeping your elbows close to your body, lower into the bottom of a pushup. ... Lower into another close-grip pushup, then drive straight up.
                4 SETS WITH 15 REPS
                `,
                count: 15,
              },
              {
                image: require('../assets/images/arm-circle-men.gif'),
                title: 'ARM CIRCLE',
                description: `Standing with a flat back and tight core, raise your arms to the sides.
                While focusing on the shoulders, slowly rotate your arms in a circular motion. Start with small circles. Gradually increase the size of the circles.
                4 SET 4/8 REPS
                  `,
                count: 8,
              },
            ],
          },
          {
            title: 'DAY 6: ABS ',

            exercises: [
              {
                image: require('../assets/images/hanging-leg-raise.gif'),
                title: 'Hanging leg raise',
                description: `Grab a pullup bar and lower yourself into a dead hang. Straighten your legs and pull your pelvis back slightly. Tense your core and raise your legs until your thighs are parallel with the floor. Hold for a count, then slowly lower your legs back to the starting position. 
                REPEAT 12-15 times
                  `,
                count: 15,
              },
              {
                image: require('../assets/images/crunch.gif'),
                title: 'Crunch',
                description: `Lie on your back, knees bent and feet flat on the floor. Put your hands behind your head, elbows facing out. With your low back on the floor, use your ab muscles to lift your upper body as far as you can. Hold the pose, then slowly return to the floor.
                REPEAT FOR 10-12 REPS
                  `,
                count: 12,
              },
              {
                image: require('../assets/images/side-plank-men.gif'),
                title: 'SIDE PLANK',
                description: `Start on your side with your feet together and one forearm directly below your shoulder. Contract your core and raise your hips until your body is in a straight line from head to feet. Hold the position for 2 minutes without letting your hips drop for the allotted time for each set, then repeat on the other side.
                `,
                count: 120,
              },
              {
                image: require('../assets/images/leg-raise-men.gif'),
                title: 'LEG RAISE',
                description: `Lie faceup on the floor with your legs straight and your palms facing down. This is the starting position. Without bending your legs, lift them toward the ceiling until your hips just leave the floor. Then lower your legs down to the starting position again.
                2 SETS REPEAT FOR 10-12 REPS
                  `,
                count: 12,
              },
            ],
          },
          {
            title: 'DAY 7: CORE',
            exercises: [
              {
                image: require('../assets/images/plank-men.gif'),
                title: 'PLANK ',
                description: `Get into pushup position on the floor
                Now bend your elbows 90° and rest your weight on your forearms. Your elbows should be directly beneath your shoulders, and your body should form a straight line from your head to your feet. Hold the position for as long as you can. Your goal should be to hold it for two minutes.
                  `,
                count: 120,
              },
              {
                image: require('../assets/images/wall-sit-men.gif'),
                title: 'WALL SIT',
                description: `wall sitting places their back against a wall with their feet shoulder-width apart and a little ways out from the wall. Then, keeping their back against the wall, they lower their hips until their knees form right angles. This is a very intense work out for the quadriceps muscles.
                Repeat 3 set X 12 Reps
                  `,
                count: 12,
              },
            ],
          },
        ],
      },
      {
        title: 'WEIGHT GAIN DIET',
        image: require('../assets/images/weight_gain_1.jpg'),
        type: 'DIET',
        data: `        
        Weight loss for men:
        Repeat the following diet for a period of four weeks for best results.
        
        Monday
        
        Breakfast:
        45g oats with 300ml skimmed milk and 1tsp honey; 200ml apple juice.
        
        Snack
        120g low-fat yoghurt with blueberries and honey.
        
        Lunch:
        Grilled chicken (1 chicken breast) salad sandwich with wholemeal bread.
        
        Snack:
        Smoothie-blend 25g whey protein, 80g raspberries, 80g blueberries, 50 blackberries and water.
        
        Dinner:
        120g tuna steak with stir-fried broccoli, mushrooms, green beans , sesame seeds and oil; 70 g brown rice.
        
        Snack: 250ml skimed milk.
        
        Daily total:
        1,835 calories, 1,36g protein, 229g carbs, 33g fat
        
        Tuesday 
        
        Breakfast:
        Smoothie-blend 25g whey protein, 300ml skimmed milk, 100g strawberries and a banana.
        
        Snack:
        120g low- fat yoghurt, blueberries and honey.
        
        Lunch:
        Tuna sandwich on wholemeal bread; 200ml skimmed milk.
        
        Snack:
        1 apple with tbsp natural peanut butter.
        
        Daily total:
        1,802 calories , 131g protein , 219g carbs, 37g fat
        
        Wednesday
        
        Smoothie- blend 25g whey protein, 300ml skimmed milk, 100g strawberries and a banana.
        
        Snack:
        90g mackerel on 1 slice of wholemeal toast.
        
        Lunch:
        1 apple; chicken salad sandwich on wholemeal bread.
        
        Snack: 
        1 banana
        
        Dinner: 
        120g fillet steak with spinach and 2 grilled tomatoes.
        
        Snack:
        100g low-fat cottage cheese and pineapple.
        
        Daily total:
        1,821 calories, 138g protein, 222g carbs, 35g fat
        
        Thursday
        
        Breakfast:
        4 scrambled egg whites on 2 slices of wholemeal toast.
        
        Snack:
        1 low-fat yogurt with blueberries and a handful of oats and honey.
        
        Lunch:
        Smoothie-blend 25g whey protein, 80g raspberries, 80g blueberries, 50g blackberries and water; 30g brazil nuts.
        
        Snack:
        100g low-fat cottage and pineapple.
        
        Dinner:
        Tuna nicoise salad 9100g tuna, mixed salad leaves, plum tomatoes, a red pepper and 4 new potatoes).
        
        Snack:
        250ml skimmed milk.
        
        Daily total:
        1,835 calories, 136g protein, 229g carbs, 33g fat
        
        Friday
        
        Breakfast :
        45g oats with 300ml skimmed milk and 1tsp honey.
        
        Snack:
        10 radishes with balsamic vinaigrette.
        
        Lunch:
        1 can of tuna with beetroot; 1 low-fat yogurt.
        
        Snack:
        Smoothie- blend 25g whey protein, 80g raspberries, 80g blueberries and 50g blackberries with water.
        
        Dinner:
        120g barbecue chicken kebab with peppers and 70g brown rice.
        
        Snack:
        100g cottage cheese; grapes.
        
        Daily total:
        1,808 calories, 122g protein, 219g carbs, 34g fat
        
        Sutarday
        
        Breakfast:
        2-egg omelette with cheese.
        
        Snack Smoothie:blend 25g protein, 1 apple, 50g blueberries, 50g blackberries and a banana with water.
        
        Lunch:
        90g sardines on 1 slice of wholemeal toast.
        
        Snack:
        150g raw carrotsand hummus
        
        Dinner:
        100g grilled salmon with green beans, asparagus and 70g brown rice
        
        Snack 
        200ml skimmed milk
        
        Daily total:
        1,822 calories, 135g protein, 221g carbs 36g fat
        
        Sunday
        
        Breakfast:
        4 scrambled egg whites on 2 slices of wholemeal toast; 1 grapefruit
        
        Snck:
        Smoothie- blend 25g protein, 300ml skimmed milk, 50g blueberries, 50g blackberries and a banana.
        
        Lunch:
        Tuna sandwich on wholemeal bread; 1pear.
        
        Snack:
        Mixed nuts and fruit bar.
        
        Dinner:
        120g fillet steak with 1 small jacket potato, spinach and grilled tomato.
        
        Snack:
        1 apple with 2tbsp natural peanut butter
        
        Daily total:
        1,840 calories, 140g protein, 228g carbs, 39g fat
        `,
      },
    ],
  },
};
