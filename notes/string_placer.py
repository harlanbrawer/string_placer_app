

# get the input
first_string_pos = input("Enter first string pos: ")
last_string_pos = input("Enter first string pos: ")
string_widths_str = input("Enter string widths separated by spaces (ex: \"1.23 0.79 .64 1\"): ")

# parse out the string widths
string_widths_asstr = string_widths_str.split(' ')
if (len(string_widths_asstr) < 2):
	print("Need to enter 2 or more strings.")
	exit()

# convert to numbers
first_string_pos = float(first_string_pos)
last_string_pos = float(last_string_pos)
string_widths = []
for width in string_widths_asstr:
	string_widths.append(float(width))

# get string pos by center
string_pos_by_center = []
num_strings = len(string_widths)
length = last_string_pos - first_string_pos
spacing = length / float(num_strings - 1)
for i in range(num_strings):
	string_pos_by_center.append(first_string_pos + i * spacing)
print("Positions by center align: ", string_pos_by_center)

# get string pos by empty space
string_pos_by_space = []
taken_by_string = 0;
# add half of the first and last strings
taken_by_string += (string_widths[0] + string_widths[num_strings - 1]) / 2
# add the rest of the strings
i = 1
while i < num_strings - 1:
	taken_by_string += string_widths[i]
	i += 1

# calculate the spacings
empty_spacing = (length - taken_by_string) / float(num_strings - 1)

# set the array
current_pos = first_string_pos

for i in range(num_strings):
	string_pos_by_space.append(current_pos)
	if i == num_strings - 1:
		break
	current_pos += string_widths[i] / 2 + empty_spacing + string_widths[i + 1] / 2

print("Positions by even spacing: ", string_pos_by_space)

# average the positions
string_pos_avg = []
for i in range(num_strings):
	string_pos_avg.append((string_pos_by_center[i] + string_pos_by_space[i]) / 2)

print("Average string positions between by center and by space: ", string_pos_avg)