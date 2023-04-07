class Solution:
    def accountsMerge(self, accounts):
        # {name: [idx]}
        # addresses: [set]
        # for each common name, check emails against each other and merge into latest idx
        addresses = [0]*len(accounts)
        names = {}
        for i in range(len(accounts)):
            this_name = accounts[i][0]
            addresses[i] = set(accounts[i][1:])
            if this_name in names:
                for idx in names[this_name]:
                    if addresses[idx] and addresses[idx].intersection(addresses[i]):
                        addresses[i].update(addresses[idx])
                        addresses[idx] = None
                names[this_name].append(i)
            else:
                names[this_name] = [i]
        emails = []
        for i in range(len(accounts)):
            if addresses[i]:
                temp = list(addresses[i])
                temp.sort()
                emails.append([accounts[i][0],*temp])
        return emails
