# In this simple RPG game, the hero fights the goblin. He has the options to:
# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee

class Character(object):
    def __init__(self, name, health, power):
        self.name = name
        self.health = health
        self.power = power

    def alive(self):
        if self.health > 0:
            return True
        else:
            return False 

    def attack(self, enemy, ):
        enemy.health -= self.power
        print "%s did %d damage to %s." % (self.name, self.power, enemy.name)
        if enemy.health <= 0:
            print "%s is dead." % (enemy.name)

    def printStatus(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)

class Hero(Character):
    def __init__(self, name):
        super(Hero, self).__init__(name, 10, 5)

class Goblin(Character):
    def __init__(self, name):
        super(Goblin, self).__init__(name, 6, 2)

class Zombie(Character):
    def __init__(self, name):
        super(Zombie, self).__init__(name, 100, 2)
    
    def attack(self, enemy):
        print "%s did no damage to %s." % (self.name, enemy.name)

def main():
    barryTheHero = Hero("Barry the Hero")
    steveTheGoblin = Goblin("Steve the Goblin")
    jakeTheZombie = Zombie("Jake the Zombie")

    while steveTheGoblin.alive() and barryTheHero.alive():
        barryTheHero.printStatus()
        steveTheGoblin.printStatus()
        jakeTheZombie.printStatus()
        print
        print "What do you want to do?"
        print "1. Fight the goblin!"
        print "2. Fight the Zombie!"
        print "2. Do nothing..."
        print "3. Flee!"
        print "> ",

        input = raw_input()
        if input == "1":
            # Hero attacks goblin
            barryTheHero.attack(steveTheGoblin)
        elif input == "2":
            barryTheHero.attack(jakeTheZombie)
        elif input == "3":
            pass
        elif input == "4":
            print "See you next time."
            break
        else:
            print "Invalid input %r" % input

        if steveTheGoblin.alive():
            # Goblin attacks hero
            steveTheGoblin.attack(barryTheHero)

main()