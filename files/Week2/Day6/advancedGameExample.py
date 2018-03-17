import random
import time
from sys import exit

class Character(object):
    def __init__(self):
        self.name = '<undefined>'
        self.health = 10
        self.power = 5
        self.coins = 20

    def alive(self):
        return self.health > 0

    def attack(self, enemy):
        if not self.alive():
            return
        print "%s attacks %s" % (self.name, enemy.name)
        enemy.receive_damage(self.power)
        time.sleep(1.5)

    def receive_damage(self, points):
        self.health -= points
        print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name

    def print_status(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)

class Hero(Character):
    def __init__(self):
        self.name = 'hero'
        self.health = 10
        self.power = 5
        self.coins = 40
        self.armor = 0
        self.evade = 0
        self.pack = []

    def attack(self, enemy):
        if random.randint(0, 100) < 20:
            print "!NATURAL 20!  !CRITICAL HIT!  !DOUBLE DAMAGE!"
            enemy.receive_damage(self.power * 2)
        else:
            super(Hero, self).attack(enemy)
        time.sleep(1.5)

    def receive_damage(self, points):
        if random.randint(0, 18 + self.evade * 2) < self.evade:
            print "%s has moves like a cat.  %s missed!" % (self.name, enemy.name)
        else:
            if points - self.armor <= 0:
                print "%s received 0 damage." % (self.name)
            else:
                self.health -= points - self.armor
                print "%s received %d damage." % (self.name, points - self.armor)
                if self.health <= 0:
                    print "%s is dead." % self.name

    def restore(self):
        self.health = 10
        print "Hero's heath is restored to %d!" % self.health
        time.sleep(1)

    def buy(self, item):
        if item.cost > self.coins:
            print "You don't have enough coins to buy this item."
        else:
            self.coins -= item.cost
            hero.pack.append(item)
            print hero.pack

    def use(self, item):
        item.apply(self)
        hero.pack.remove(item)


class Goblin(Character):
    def __init__(self):
        self.name = 'goblin'
        self.health = 6
        self.power = 2
        self.coins = 10


class Healer(Character):
    """docstring for Healer"""

    def __init__(self):
        self.name = 'Healer'
        self.health = 14
        self.power = 4
        self.coins = 10

    def receive_damage(self, points):
        if random.randint(0, 100) < 20:
            print "The healer casts a spell of healing on himself!"
            self.health += 2
        self.health -= points
        print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name


class Shadow(Character):
    def __init__(self):
        self.name = "shadow"
        self.health = 1
        self.power = 1
        self.coins = 5

    def receive_damage(self, points):
        if random.randint(0, 100) > 10:
            print "Your attack slides through the shadow like water, he is unphased!"
        else:
            print "Your blade rips through the soul of the shadow, turning it into a pile of soot."
            self.health -= points
            print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name


class Wizard(Character):
    def __init__(self):
        self.name = 'wizard'
        self.health = 8
        self.power = 1
        self.coins = 10

    def attack(self, enemy):
        swap_power = random.random() > 0.5
        if swap_power:
            print "%s swaps power with %s during attack" % (self.name, enemy.name)
            self.power, enemy.power = enemy.power, self.power
        super(Wizard, self).attack(enemy)
        if swap_power:
            self.power, enemy.power = enemy.power, self.power


class Zombie(Character):
    def __init__(self):
        self.name = 'Zombie'
        self.health = 2
        self.power = 1
        self.coins = 20
        self.isalive = True

    def alive(self):
        return self.isalive


class Thief(Character):
    def __init__(self):
        self.name = 'Thief'
        self.health = 10
        self.power = 2
        self.coins = 30

    def receive_damage(self, points):
        if random.randint(0, 100) < 20 and len(hero.pack) > 0:
            print "The %s stole an item from your pack!" % (self.name)
            del hero.pack[0]
        else:
            self.health -= points
            print "%s received %d damage." % (self.name, points)
        if self.health <= 0:
            print "%s is dead." % self.name


class Mirror(Hero):
    def __init__(self):
        self.name = "Mirror hero"
        self.health = hero.health
        self.power = hero.power
        self.evade = hero.evade
        self.coins = hero.coins
        self.pack = hero.pack
        self.armor = hero.armor


class Battle(object):
    def do_battle(self, hero, enemy):
        print "====================="
        print "Hero faces the %s" % enemy.name
        print "====================="
        while hero.alive() and enemy.alive():
            hero.print_status()
            enemy.print_status()
            time.sleep(1.5)
            print "-----------------------"
            print "What do you want to do?"
            print "1. fight %s" % enemy.name
            print "2. do nothing"
            print "3. flee"
            if len(hero.pack) > 0:
                print "4. use item"
            print "> ",
            input = int(raw_input())
            if input == 1:
                hero.attack(enemy)
            elif input == 2:
                pass
            elif input == 3:
                print "Goodbye."
                exit(0)
            elif len(hero.pack) > 0:
                if input == 4:
                    for i in xrange(len(hero.pack)):
                        item = hero.pack[i]
                        print "%d %s " % (i + 1, item)
                    input = int(raw_input("> "))
                    hero.use(hero.pack[input - 1])
            else:
                print "Invalid input %r" % input
                continue
            enemy.attack(hero)
        if hero.alive():
            print "You defeated the %s" % enemy.name
            print "%s dropped %s coins!" % (enemy.name, enemy.coins)
            hero.coins += enemy.coins
            return True
        else:
            print "YOU LOSE!"
            return False

class Tonic(object):
    cost = 5
    name = 'tonic'

    def apply(self, character):
        character.health += 2
        print "%s's health increased to %d." % (character.name, character.health)

    def __repr__(self):
        return self.name


class SuperTonic(object):
    cost = 10
    name = 'super tonic'

    def apply(self, character):
        character.health = 10
        print "%s's health is now 10" % (character.name)

    def __repr__(self):
        return self.name


class Evade(object):
    cost = 10
    name = 'Ring of Evasive Manuevers'

    def apply(self, hero):
        hero.evade += 2
        print "%s learned some sweet moves. Evasion is now at %s" % (hero.name, hero.evade)

    def __repr__(self):
        return self.name


class Swap(object):
    cost = 15
    name = 'Scroll of Power Swap'

    def apply(self, hero):
        if enemy.alive():
            print "%s swaps power with %s during attack" % (hero.name, enemy.name)
            hero.power, enemy.power = enemy.power, hero.power
            super(Hero, hero).attack(enemy)
            hero.power, enemy.power = enemy.power, hero.power
        else:
            print "Well...that did nothing....your enemy is dead and thus, there is no power to swap!!"

    def __repr__(self):
        return self.name


class Sword(object):
    cost = 10
    name = 'sword'

    def apply(self, hero):
        hero.power += 2
        print "%s's power increased to %d." % (hero.name, hero.power)

    def __repr__(self):
        return self.name


class Armor(object):
    cost = 20
    name = 'Sparkly Thimble'

    def apply(self, hero):
        hero.armor += 2
        print "%s's armor class has increased by 2!" % (hero.name)

    def __repr__(self):
        return self.name


class Zombieaway(object):
    cost = 50
    name = 'Potion of Permanent Death!'

    def apply(self, hero):
        if enemy.name == 'Zombie':
            enemy.isalive = False
            print "Throwing the potion at %s" % (enemy.name)
        else:
            print "Well...that did nothing....your enemy is not an animated corpse!!"

    def __repr__(self):
        return self.name

class Store(object):
    # If you define a variable in the scope of a class:
    # This is a class variable and you can access it like
    # Store.items => [Tonic, Sword]

    items = [Tonic, Sword, SuperTonic, Armor, Swap, Evade, Zombieaway]

    def do_shopping(self, hero):
        while True:
            print "====================="
            print "Welcome to the store!"
            print "====================="
            print "You have %d coins." % hero.coins
            print "What do you want to do?"
            for i in xrange(len(Store.items)):  # note the use of the class variable
                item = Store.items[i]
                print "%d. buy %s (%d)" % (i + 1, item.name, item.cost)
            if len(hero.pack) > 0:
                print "9. Use Item"
            print "10. leave"
            input = int(raw_input("> "))
            if input == 10:
                break
            elif len(hero.pack) > 0:
                if input == 9:
                    for i in xrange(len(hero.pack)):
                        item = hero.pack[i]
                        print "%d %s " % (i + 1, item)
                    input = int(raw_input("> "))
                    hero.use(hero.pack[input - 1])
                else:
                    ItemToBuy = Store.items[input - 1]
                    item = ItemToBuy()
                    hero.buy(item)
            else:
                ItemToBuy = Store.items[input - 1]
                item = ItemToBuy()
                hero.buy(item)


hero = Hero()
enemies = [Goblin(), Wizard(), Healer(), Shadow(), Thief(), Zombie(), Mirror()]
battle_engine = Battle()
shopping_engine = Store()

for enemy in enemies:
    hero_won = battle_engine.do_battle(hero, enemy)
    if not hero_won:
        print "YOU'RE DEAD!"
        exit()
    shopping_engine.do_shopping(hero)

print "YOU WIN!"