import random
import time


class Character(object):
    def __init__(self):
        self.name = '<undefined>'
        self.health = 10
        self.power = 5
        self.coins = 50

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
        self.coins = 20
        self.armor = 0

    def restore(self):
        self.health = 10
        print "Hero's heath is restored to %d!" % self.health
        time.sleep(1)

    def buy(self, item):
        self.coins -= item.cost
        item.apply(hero)


class Goblin(Character):
    def __init__(self):
        self.name = 'goblin'
        self.health = 6
        self.power = 2


class Wizard(Character):
    def __init__(self):
        self.name = 'wizard'
        self.health = 8
        self.power = 1

    def attack(self, enemy):
        swap_power = random.random() > 0.5
        if swap_power:
            print "%s swaps power with %s during attack" % (self.name, enemy.name)
            self.power, enemy.power = enemy.power, self.power
        super(Wizard, self).attack(enemy)
        if swap_power:
            self.power, enemy.power = enemy.power, self.power


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
            print "> ",
            input = int(raw_input())
            if input == 1:
                hero.attack(enemy)
            elif input == 2:
                pass
            elif input == 3:
                print "Goodbye."
                exit(0)
            else:
                print "Invalid input %r" % input
                continue
            enemy.attack(hero)
        if hero.alive():
            print "You defeated the %s" % enemy.name
            return True
        else:
            print "YOU LOSE!"
            return False


class Tonic(object):
    cost = 5
    name = 'some Expired Tonic'

    def apply(self, character):
        character.health += 2
        print "%s's health increased to %d." % (character.name, character.health)

    def __repr__(self):
        return self.name

class coolTonic(object):
    cost = 30
    name = 'some Fresh BelAir Tonic'

    def apply(self, character):
        character.health += 3
        print "%s's health increased to %d." % (character.name, character.health)

    def __repr__(self):
        return self.name

class iffySword(object):
    cost = 10
    name = 'a Brass but Semi-nible Sword'

    def apply(self, hero):
        hero.power += 2
        print "%s's power increased to %d." % (hero.name, hero.power)

    def __repr__(self):
        return self.name

class masterHammer(object):
    cost = 30
    name = 'a Dwarish Hammer'

    def apply(self, hero):
        hero.power += 3
        print "%s's power increased to %d." % (hero.name, hero.power)

    def __repr__(self):
        return self.name

class sweetArmor(object):
    cost = 30
    name = 'some light but helpful Armor'

    def apply(self, hero):
        hero.power += 2
        print "%s's armor increased two-fold!" % hero.name

    def __repr__(self):
        return self.name

class switchAroo(object):
    cost = 25
    name = "the ole' Switch-a-roo Potion"

    def apply(self, hero):
        if enemy.alive():
            print "%s swaps power with %s during the attack!" % (hero.name, enemy.name) 
            hero.power, enemy.power = enemy.power, hero.power
        else:
            print "Yo, your enemy is hella' dead, so this won't work..."

    def __repr__(self):
        return self.name

class Store(object):
    # If you define a variable in the scope of a class:
    # This is a class variable and you can access it like
    # Store.items => [Tonic, Sword]
    items = [Tonic, iffySword, coolTonic, masterHammer, sweetArmor, switchAroo]

    def do_shopping(self, hero):
        while True:
            print "====================="
            print "Welcome to the store!"
            print "====================="
            print "You have %d coins." % hero.coins
            print "What do you want to do?"
            for i in xrange(len(Store.items)): #note the use of the class variable
                item = Store.items[i]
                print "%d. buy %s (%d)" % (i + 1, item.name, item.cost)
            print "10. leave"
            input = int(raw_input("> "))
            if input == 10:
                break
            else:
                ItemToBuy = Store.items[input - 1]
                item = ItemToBuy()
                hero.buy(item)


hero = Hero()
enemies = [Goblin(), Wizard()]
battle_engine = Battle()
shopping_engine = Store()

for enemy in enemies:
    hero_won = battle_engine.do_battle(hero, enemy)
    if not hero_won:
        print "YOU LOSE!"
        exit(0)
    shopping_engine.do_shopping(hero)

print "YOU WIN!"
