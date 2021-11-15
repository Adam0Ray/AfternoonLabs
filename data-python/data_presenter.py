#2
data = open('CupcakeInvoices.csv')
#3
# for row in data:
#     print(row)
#4
# for row in data:
#     type = row.split(',')
#     print(type[2])

#5
# for row in data:
#     type = row.split(',')
#     total = int(type[3]) * float(type[4])
#     print(total)
# #6
total = 0
for row in data:
    type = row.split(',')
    total = total + (int(type[3]) * float(type[4]))
    print(total)

# #7
data.close()



# #######################################################################################
#PART 3
# data = open('CupcakeInvoices.csv')
# total = 0
# for row in data:
#     type = row.split(',')
#     if type[2] == 'Chocolate':
#         total = total + (int(type[3]) * float(type[4]))
# print(total)
# 267.1

# total = 0
# for row in data:
#     type = row.split(',')
#     if type[2] == 'Vanilla':
#         total = total + (int(type[3]) * float(type[4]))
# print(total)
#388.6

# total = 0
# for row in data:
#     type = row.split(',')
#     if type[2] == 'Strawberry':
#         total = total + (int(type[3]) * float(type[4]))
# print(total)
#159.69000000000003


# data.close()
###########################################################################################
# import matplotlib.pyplot as plt 
    
# # x axis values 
# x = ['Chocolate','Vanilla','Strawberry'] 
# # corresponding y axis values 
# y = [267, 388, 159] 
    
# # plotting the points  
# plt.plot(x, y) 
    
# # naming the x axis 
# plt.xlabel('Chocolate vs Vanilla vs strawberry') 
# # naming the y axis 
# plt.ylabel('total income') 
    
# # giving a title to my graph 
# plt.title('Cupcake Income by Type') 
    
# # function to show the plot 
# plt.show() 