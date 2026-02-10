# Read from the file file.txt and print its transposed content to stdout.
awk '
{
    for (line = 1; line <= NF; line++) {
        if (NR == 1) {
            a[line] = $line
        } else {
            a[line] = a[line] " " $line
        }
    }
}
END {
    for (line = 1; line <= NF; line++) {
        print a[line]
    }
}' file.txt